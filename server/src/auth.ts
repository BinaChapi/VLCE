import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export interface AdminRequest extends Request { adminEmail?: string }
const secret = () => process.env.JWT_SECRET || ''

export function requireAdmin(req: AdminRequest, res: Response, next: NextFunction) {
  const auth = req.headers.authorization
  const token = auth?.startsWith('Bearer ') ? auth.slice(7) : ''
  if (!token || secret().length < 32) {
    res.status(401).json({ success: false, error: { message: 'Authentication required' } })
    return
  }
  try {
    const decoded = jwt.verify(token, secret()) as { email?: string; role?: string }
    if (decoded.role !== 'admin' || !decoded.email) throw new Error('Invalid token')
    req.adminEmail = decoded.email
    next()
  } catch {
    res.status(401).json({ success: false, error: { message: 'Session expired. Please sign in again.' } })
  }
}

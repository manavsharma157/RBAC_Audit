const AuditLog = require('../models/AuditLog');

const authorize = (allowedRoles) => {
  return async (req, res, next) => {

    const userId = req.headers['user-id']; 
    const User = require('../models/User');
    const user = await User.findById(userId);

    if (!user || !allowedRoles.includes(user.role)) {

      await AuditLog.create({
        userId: userId || null,
        action: `${req.method} ${req.originalUrl}`,
        status: "DENIED"
      });
      return res.status(403).json({ message: "Security Breach: Access Denied" });
    }


    await AuditLog.create({
        userId: userId,
        action: `${req.method} ${req.originalUrl}`,
        status: "SUCCESS"
    });
    
    next();
  };
};

module.exports = authorize;
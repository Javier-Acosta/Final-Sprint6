// para ver si puede los usuarios hacer algo 
export function can(user, permission) {
    if (!user || !user.permissions) return false
    return user.permissions.includes(permission)
}
export const roleMap = {
    '68165bad6e1f2a04bda8f0bd': {
        name: 'user',
        permissions: ['read:superheros']
    },
    '68165d386e1f2a04bda8f0c2': {
        name: 'editor',
        permissions: ['read:superheros', 'create:superheros', 'update:superheros']
    },
    '68165e206e1f2a04bda8f0c4': {
        name: 'admin',
        permissions: ['read:superheros', 'create:superheros', 'update:superheros', 'delete:superheros']
    }
};
import bcrypt from 'brcyptjs';

const users = [
  {
    name: 'Emma Kamala',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Prisca Masese',
    email: 'prisca@admin.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jesse Bukambu',
    email: 'jkb@admin.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users;
import { prisma } from '../lib/db';

async function setAdmin(email: string) {
  try {
    const user = await prisma.user.update({
      where: { email },
      data: { role: 'admin' },
    });
    
    console.log(`✅ Successfully set ${email} as admin`);
    console.log(`User: ${user.name} (${user.email})`);
    console.log(`Role: ${user.role}`);
  } catch (error) {
    console.error(`❌ Error setting admin for ${email}:`, error);
  } finally {
    await prisma.$disconnect();
  }
}

// Set chidubem.chukwuafu@gmail.com as admin
setAdmin('chidubem.chukwuafu@gmail.com');

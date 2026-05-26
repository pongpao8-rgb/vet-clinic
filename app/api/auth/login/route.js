import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const { username, password } = await request.json()
    
    const staff = await prisma.staff.findFirst({
      where: { name: username }
    })

    if (!staff || staff.password !== password) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    return NextResponse.json({
      success: true,
      staff: {
        id: staff.id,
        name: staff.name,
        level: staff.level
      }
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  try {
    const session = await getSession();
    if (!session?.id || session.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get total products
    const totalProducts = await prisma.product.count();

    // Get total orders
    const totalOrders = await prisma.order.count();

    // Get total customers (users)
    const totalCustomers = await prisma.user.count({
      where: { role: "USER" },
    });

    // Calculate total revenue from completed orders
    const orders = await prisma.order.findMany({
      where: { status: "DELIVERED" },
      select: { total: true },
    });
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

    return NextResponse.json({
      totalProducts,
      totalOrders,
      totalCustomers,
      totalRevenue,
    });
  } catch (error) {
    console.error("Get stats error:", error);
    return NextResponse.json(
      { error: "Failed to get dashboard stats" },
      { status: 500 }
    );
  }
}

import { EmptyState } from "@/components/general/EmptyState";
import { getAllCourses } from "../data/course/get-all-courses";
import { PublicCourseCard } from "../(public)/_components/PublicCourseCard";
import { checkUserHasActiveSubscription } from "../data/subscription/get-user-subscription";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default async function DashboardPage() {
  const hasActiveSubscription = await checkUserHasActiveSubscription();

  if (!hasActiveSubscription) {
    redirect("/subscribe");
  }

  const courses = await getAllCourses();

  return (
    <>
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold">My Courses</h1>
          <Badge className="bg-green-500">Active Subscription</Badge>
        </div>
        <p className="text-muted-foreground">
          You have unlimited access to all courses on the platform
        </p>
      </div>

      {courses.length === 0 ? (
        <EmptyState
          title="No courses available"
          description="There are currently no courses available. Check back soon!"
          buttonText="Go Home"
          href="/"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <PublicCourseCard key={course.id} data={course} />
          ))}
        </div>
      )}
    </>
  );
}

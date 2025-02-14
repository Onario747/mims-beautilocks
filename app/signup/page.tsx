import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Input type="text" placeholder="First name" />
              </div>
              <div className="space-y-1">
                <Input type="text" placeholder="Last name" />
              </div>
            </div>
            <div className="space-y-1">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="space-y-1">
              <Input type="password" placeholder="Password" />
            </div>
            <div className="space-y-1">
              <Input type="password" placeholder="Confirm password" />
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <Link href="/terms" className="text-primary hover:underline">
                terms and conditions
              </Link>
            </label>
          </div>
          <Button className="w-full" size="lg">
            Create account
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <Facebook className="mr-2 h-4 w-4" />
              Facebook
            </Button>
            <Button variant="outline" className="w-full">
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </div> */}
        </CardContent>
        <CardFooter className="flex flex-wrap items-center justify-center gap-1">
          <div className="text-sm text-muted-foreground">
            Already have an account?
          </div>
          <Link
            href="/login"
            className="text-sm font-medium text-primary hover:underline"
          >
            Sign in
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

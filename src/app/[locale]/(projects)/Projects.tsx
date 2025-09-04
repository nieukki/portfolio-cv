import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  return (
    <div className="w-screen min-h-screen">
      <div className="container mx-auto grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Finance App Next.js</CardTitle>
          </CardHeader>
          <CardContent>
            <p>tutaj jakis image</p>
            <CardDescription>opis zadania na czym polegea itp</CardDescription>
          </CardContent>
          <CardFooter>
            <div className="flex flex-col items-start justify-center gap-y-3">
              <h2 className="ml-1">Used technologies</h2>
              <div className="flex flex-row items-center justify-start gap-x-3">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;

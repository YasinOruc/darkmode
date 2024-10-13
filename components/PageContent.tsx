import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function PageContent() {
  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Yasin Oruc</h1>
        <h1 className="text-4xl font-bold mb-4">Dark Mode Demo</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the seamless transition between light and dark. Use the switch in the top-right corner to toggle modes.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        <DemoCard
          title="Theme Adaptation"
          description="This card demonstrates how different components adapt to theme changes."
        />
        <DemoCard
          title="Interactive Elements"
          description="Explore how interactive elements respond to the selected theme."
        >
          <Button className="mt-4">Click me</Button>
        </DemoCard>
      </div>
    </main>
  )
}

function DemoCard({ title, description, children }: { title: string; description: string; children?: React.ReactNode }) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        {children}
      </CardContent>
    </Card>
  )
}
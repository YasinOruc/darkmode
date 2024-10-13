// components/PageContent.tsx
export default function PageContent(): JSX.Element {
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Dark Mode Demo</h1>
        <p className="mb-4">
          This is a demonstration of the dark mode toggle. The toggle button is located in the top-right corner of the
          screen.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 rounded-lg bg-card text-card-foreground">
            <h2 className="text-2xl font-semibold mb-2">Card Example</h2>
            <p>This card demonstrates how different components adapt to the theme change.</p>
          </div>
          <div className="p-4 rounded-lg bg-card text-card-foreground">
            <h2 className="text-2xl font-semibold mb-2">Interactive Elements</h2>
            <button className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300">
              Button
            </button>
          </div>
        </div>
      </main>
    )
  }
  
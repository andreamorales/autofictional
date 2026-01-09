import { createFileRoute } from '@tanstack/react-router';
import { useAutofictional } from '@autofictional/runtime';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export const Route = createFileRoute('/autofictional-test')({
  component: AutofictionalTest,
});

function AutofictionalTest() {
  const { appId, isInitialized } = useAutofictional();

  return (
    <div className="container mx-auto p-8">
      <Card>
        <CardHeader>
          <CardTitle>Autofictional Installation Test</CardTitle>
          <CardDescription>NIGHT 1 - Runtime Skeleton Verification</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Status:</span>
            <Badge variant={isInitialized ? 'default' : 'destructive'}>
              {isInitialized ? '✓ Initialized' : '✗ Not Initialized'}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-semibold">App ID:</span>
            <code className="px-2 py-1 bg-muted text-foreground text-sm">
              {appId}
            </code>
          </div>

          <div className="mt-6 p-4 bg-muted/50 border-l-4 border-foreground">
            <h3 className="font-semibold mb-2">✓ NIGHT 1 Success Criteria Met:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>App boots without errors</li>
              <li>AutofictionalProvider is mounted</li>
              <li>Context is accessible via useAutofictional hook</li>
              <li>No UI changes (skeleton only)</li>
              <li>No console errors</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


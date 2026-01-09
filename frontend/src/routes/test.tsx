import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'
import '../../../shared/design-system/lib/logo-animations.css'
import { Logo } from '@/components/logo'

export const Route = createFileRoute('/test')({
  component: TestPage,
})

function TestPage() {
  const [progress, setProgress] = useState(33)
  const [checked, setChecked] = useState(false)

  return (
    <div className="min-h-screen bg-background p-l">
      <div className="max-w-6xl mx-auto py-xl">
        <header className="mb-xl">
          {/* Logo with circular grainy background */}
          <div className="flex justify-center mb-l">
            <div className="relative" style={{ width: '128px', height: '128px' }}>
              {/* Circular grainy background with opacity gradient - fake shadow effect */}
              <div 
                className="absolute rounded-full grainy-gradient-light"
                style={{
                  width: '160px',
                  height: '160px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0) 70%)',
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 45%, rgba(0,0,0,0) 70%)',
                  zIndex: 0,
                }}
              ></div>
              <Logo 
                animation="blink"
                trackMouse={true}
                eyeFollowIntensity={1.0}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10"
                style={{ width: '128px', height: '128px' }}
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-semantic-foreground mb-s text-center">Component Test Page</h1>
          <p className="text-semantic-foreground opacity-70 text-center">
            Testing semantic spacing, colors, and shadcn/ui components
          </p>
        </header>

        {/* Semantic Colors Section */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Semantic Colors</h2>
          <div className="grid grid-cols-2 gap-m md:grid-cols-4">
            <div className="p-m rounded-lg bg-semantic-error text-semantic-error-foreground">
              Error
            </div>
            <div className="p-m rounded-lg bg-semantic-success text-semantic-success-foreground">
              Success
            </div>
            <div className="p-m rounded-lg bg-semantic-precaution text-semantic-precaution-foreground">
              Precaution
            </div>
            <div className="p-m rounded-lg bg-semantic-alert text-semantic-alert-foreground">
              Alert
            </div>
            <div className="p-m rounded-lg bg-semantic-info text-semantic-info-foreground">
              Info
            </div>
          </div>
        </section>

        {/* Semantic Spacing Section */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Semantic Spacing</h2>
          <div className="flex flex-wrap gap-m">
            <div className="p-xs bg-semantic-info/20 rounded">p-xs</div>
            <div className="p-s bg-semantic-info/20 rounded">p-s</div>
            <div className="p-m bg-semantic-info/20 rounded">p-m</div>
            <div className="p-l bg-semantic-info/20 rounded">p-l</div>
            <div className="p-xl bg-semantic-info/20 rounded">p-xl</div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Buttons</h2>
          <div className="flex flex-wrap gap-m">
            <Button>Default (Filled Black)</Button>
            <Button variant="filled">Filled Black</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline Black</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-m">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content area.</p>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Another Card</CardTitle>
                <CardDescription>With semantic spacing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-s">Using p-xs, p-s, p-m spacing classes.</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Alerts</h2>
          <div className="flex flex-col gap-m">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>This is a default alert message.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>This is a destructive alert message.</AlertDescription>
            </Alert>
            <Alert variant="success">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>Using semantic success color with darker text.</AlertDescription>
            </Alert>
            <Alert variant="precaution">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Precaution Alert</AlertTitle>
              <AlertDescription>Using semantic precaution color with darker text.</AlertDescription>
            </Alert>
            <Alert variant="alert">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Alert</AlertTitle>
              <AlertDescription>Using semantic alert color (yellow) with darker text.</AlertDescription>
            </Alert>
            <Alert variant="info">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Info Alert</AlertTitle>
              <AlertDescription>Using semantic info color with darker text.</AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Badges</h2>
          <div className="flex flex-wrap gap-m">
            <Badge>Default (Outline)</Badge>
            <Badge variant="filled">Filled Black</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge className="bg-semantic-success">Success</Badge>
            <Badge className="bg-semantic-precaution">Precaution</Badge>
            <Badge className="bg-semantic-alert">Alert</Badge>
            <Badge className="bg-semantic-info">Info</Badge>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Form Elements</h2>
          <Card className="p-l">
            <div className="flex flex-col gap-m">
              <div className="flex flex-col gap-xs">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="flex items-center gap-s">
                <Checkbox
                  id="terms"
                  checked={checked}
                  onCheckedChange={checked => setChecked(checked === true)}
                />
                <Label htmlFor="terms" className="cursor-pointer">
                  Accept terms and conditions
                </Label>
              </div>
              <div className="flex items-center gap-s">
                <Switch id="notifications" />
                <Label htmlFor="notifications" className="cursor-pointer">
                  Enable notifications
                </Label>
              </div>
              <div className="flex flex-col gap-xs">
                <Label>Progress: {progress}%</Label>
                <Progress value={progress} />
                <div className="flex gap-s">
                  <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                    -
                  </Button>
                  <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                    +
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Tabs */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Tabs</h2>
          <Tabs defaultValue="tab1" className="w-full">
            <TabsList>
              <TabsTrigger value="tab1">Tab 1</TabsTrigger>
              <TabsTrigger value="tab2">Tab 2</TabsTrigger>
              <TabsTrigger value="tab3">Tab 3</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1" className="p-m border rounded-lg mt-m">
              Content for Tab 1
            </TabsContent>
            <TabsContent value="tab2" className="p-m border rounded-lg mt-m">
              Content for Tab 2
            </TabsContent>
            <TabsContent value="tab3" className="p-m border rounded-lg mt-m">
              Content for Tab 3
            </TabsContent>
          </Tabs>
        </section>

        {/* Avatars */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Avatars</h2>
          <div className="flex gap-m">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Separator */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Separator</h2>
          <div className="flex flex-col gap-m">
            <div>Content above</div>
            <Separator />
            <div>Content below</div>
          </div>
        </section>

        {/* Toast Test */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Toast Notifications</h2>
          <div className="flex flex-wrap gap-m">
            <Button onClick={() => toast('Default toast')}>Show Toast</Button>
            <Button onClick={() => toast.success('Success toast')}>Success Toast</Button>
            <Button onClick={() => toast.error('Error toast')}>Error Toast</Button>
            <Button onClick={() => toast.warning('Precaution toast')}>
              Precaution Toast
            </Button>
            <Button onClick={() => toast('Alert toast')}>Alert Toast</Button>
            <Button onClick={() => toast.info('Info toast')}>Info Toast</Button>
          </div>
        </section>

        {/* Spacing Demo */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Spacing Demo</h2>
          <Card className="p-l">
            <div className="flex flex-col gap-m">
              <div className="p-m bg-semantic-info/10 rounded">
                <p className="mb-s">This card uses semantic spacing:</p>
                <ul className="list-disc list-inside ml-l">
                  <li>Card padding: p-l (16px)</li>
                  <li>Gap between elements: gap-m (12px)</li>
                  <li>Margin bottom: mb-s (8px)</li>
                </ul>
              </div>
              <div className="flex gap-s">
                <div className="p-xs bg-semantic-error/20 rounded">xs</div>
                <div className="p-s bg-semantic-error/20 rounded">s</div>
                <div className="p-m bg-semantic-error/20 rounded">m</div>
                <div className="p-l bg-semantic-error/20 rounded">l</div>
              </div>
            </div>
          </Card>
        </section>

        {/* Color Gradations */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Color Gradations</h2>
          
          {/* Grayscale */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Grayscale (0-100)</h3>
            <div className="grid grid-cols-6 gap-s">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-gray-0 border-2 border-gray-20"></div>
                <span className="text-xs font-body text-center">gray-0</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-gray-20 border-2 border-gray-40"></div>
                <span className="text-xs font-body text-center">gray-20</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-gray-40 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">gray-40</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-gray-60 border-2 border-gray-80"></div>
                <span className="text-xs font-body text-center">gray-60</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-gray-80 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">gray-80</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-gray-100 border-2 border-gray-80"></div>
                <span className="text-xs font-body text-center">gray-100</span>
              </div>
            </div>
          </div>

          {/* Red Gradations */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Red Gradations (0-100 in steps of 10)</h3>
            <div className="grid grid-cols-11 gap-xs">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-0 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-0</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-10 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-10</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-20 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-20</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-30 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-30</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-40 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-40</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-50 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">★ red-50</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-60 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-60</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-70 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-70</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-80 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-80</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-90 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-90</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-red-100 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">red-100</span>
              </div>
            </div>
            <p className="text-sm font-body text-muted-foreground mt-s">★ = semantic-error (red-50)</p>
          </div>

          {/* Green Gradations */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Green Gradations (0-100 in steps of 10)</h3>
            <div className="grid grid-cols-11 gap-xs">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-0 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-0</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-10 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-10</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-20 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-20</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-30 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-30</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-40 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">★ green-40</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-50 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-50</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-60 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-60</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-70 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-70</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-80 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-80</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-90 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-90</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-green-100 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">green-100</span>
              </div>
            </div>
            <p className="text-sm font-body text-muted-foreground mt-s">★ = semantic-success (green-40)</p>
          </div>

          {/* Orange Gradations */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Orange Gradations (0-100 in steps of 10)</h3>
            <div className="grid grid-cols-11 gap-xs">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-0 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-0</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-10 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-10</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-20 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-20</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-30 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-30</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-40 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-40</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-50 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">★ orange-50</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-60 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-60</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-70 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-70</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-80 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-80</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-90 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-90</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-orange-100 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">orange-100</span>
              </div>
            </div>
            <p className="text-sm font-body text-muted-foreground mt-s">★ = semantic-precaution (orange-50)</p>
          </div>

          {/* Yellow Gradations */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Yellow Gradations (0-100 in steps of 10)</h3>
            <div className="grid grid-cols-11 gap-xs">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-0 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-0</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-10 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-10</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-20 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-20</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-30 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-30</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-40 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-40</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-50 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">★ yellow-50</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-60 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-60</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-70 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-70</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-80 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-80</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-90 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-90</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-yellow-100 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">yellow-100</span>
              </div>
            </div>
            <p className="text-sm font-body text-muted-foreground mt-s">★ = semantic-alert (yellow-50)</p>
          </div>

          {/* Blue Gradations */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Blue Gradations (0-100 in steps of 10)</h3>
            <div className="grid grid-cols-11 gap-xs">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-0 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-0</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-10 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-10</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-20 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-20</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-30 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-30</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-40 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-40</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-50 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">★ blue-50</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-60 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-60</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-70 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-70</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-80 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-80</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-90 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-90</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-blue-100 border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">blue-100</span>
              </div>
            </div>
            <p className="text-sm font-body text-muted-foreground mt-s">★ = semantic-info (blue-50)</p>
          </div>

          {/* Semantic Colors */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Semantic Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-m">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-error border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-error</span>
                <span className="text-xs font-body text-center text-muted-foreground">(red-50)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-success border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-success</span>
                <span className="text-xs font-body text-center text-muted-foreground">(green-40)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-precaution border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-precaution</span>
                <span className="text-xs font-body text-center text-muted-foreground">(orange-50)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-alert border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-alert</span>
                <span className="text-xs font-body text-center text-muted-foreground">(yellow-50)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-info border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-info</span>
                <span className="text-xs font-body text-center text-muted-foreground">(blue-50)</span>
              </div>
            </div>
          </div>

          {/* Semantic Dark Variants */}
          <div className="mb-xl">
            <h3 className="text-lg font-semibold mb-s">Semantic Dark Variants (for text)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-m">
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-error-dark border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-error-dark</span>
                <span className="text-xs font-body text-center text-muted-foreground">(red-20)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-success-dark border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-success-dark</span>
                <span className="text-xs font-body text-center text-muted-foreground">(green-20)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-precaution-dark border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-precaution-dark</span>
                <span className="text-xs font-body text-center text-muted-foreground">(orange-20)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-alert-dark border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-alert-dark</span>
                <span className="text-xs font-body text-center text-muted-foreground">(yellow-20)</span>
              </div>
              <div className="flex flex-col gap-xs">
                <div className="h-20 w-full rounded-md bg-semantic-info-dark border-2 border-gray-60"></div>
                <span className="text-xs font-body text-center">semantic-info-dark</span>
                <span className="text-xs font-body text-center text-muted-foreground">(blue-20)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Text Weight Gradations */}
        <section className="mb-xl">
          <h2 className="text-2xl font-semibold mb-m">Text Weight Gradations</h2>
          <Card className="p-2xl">
            <div className="flex flex-col gap-m">
              <div className="flex flex-col gap-xs">
                <span className="text-sm font-body text-muted-foreground">font-body (400)</span>
                <p className="text-lg font-body">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex flex-col gap-xs">
                <span className="text-sm font-body text-muted-foreground">font-medium (500)</span>
                <p className="text-lg font-medium">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex flex-col gap-xs">
                <span className="text-sm font-body text-muted-foreground">font-semibold (600)</span>
                <p className="text-lg font-semibold">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex flex-col gap-xs">
                <span className="text-sm font-body text-muted-foreground">font-bold (700) - Clickable</span>
                <p className="text-lg font-bold">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="flex flex-col gap-xs">
                <span className="text-sm font-body text-muted-foreground">font-extrabold (800)</span>
                <p className="text-lg font-extrabold">The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Logo Animations */}
        <section className="mb-xl">
          <Card>
            <CardHeader>
              <CardTitle>Logo Animations</CardTitle>
              <CardDescription>
                Making the TShape logo come alive with various eye animations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2xl">
                {/* Blink Animation */}
                <div className="flex flex-col items-center gap-m">                  <Logo 
                    animation="blink"
                    className="w-32 h-32"
                    style={{ width: '128px', height: '128px' }}
                  />
                  <h3 className="text-lg font-bold">Blink</h3>
                  <p className="text-sm text-muted-foreground text-center">Both eyes blink together</p>
                </div>

                {/* Wink Left Animation */}
                <div className="flex flex-col items-center gap-m">
                  <Logo 
                    animation="wink-left"
                    className="w-32 h-32"
                    style={{ width: '128px', height: '128px' }}
                  />
                  <h3 className="text-lg font-bold">Wink Left</h3>
                  <p className="text-sm text-muted-foreground text-center">Left eye winks</p>
                </div>

                {/* Wink Right Animation */}
                <div className="flex flex-col items-center gap-m">
                  <Logo 
                    animation="wink-right"
                    className="w-32 h-32"
                    style={{ width: '128px', height: '128px' }}
                  />
                  <h3 className="text-lg font-bold">Wink Right</h3>
                  <p className="text-sm text-muted-foreground text-center">Right eye winks</p>
                </div>

                {/* Cute Face Animation */}
                <div className="flex flex-col items-center gap-m">                  <Logo 
                    animation="cute"
                    className="w-32 h-32"
                    style={{ width: '128px', height: '128px' }}
                  />
                  <h3 className="text-lg font-bold">Cute Face</h3>
                  <p className="text-sm text-muted-foreground text-center">Adorable tiny eyes</p>
                </div>

                {/* Sleep Animation */}
                <div className="flex flex-col items-center gap-m">
                  <Logo 
                    animation="sleep"
                    className="w-32 h-32"
                    style={{ width: '128px', height: '128px' }}
                  />
                  <h3 className="text-lg font-bold">Sleep (Zzz)</h3>
                  <p className="text-sm text-muted-foreground text-center">Eyes transform into Z shapes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Navigation */}
        <section>
          <Button variant="outline" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}



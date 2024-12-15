import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string | number;
  period: 'monthly' | 'annually' | 'weekly';
  badge?: {
    text: string;
    variant: 'default' | 'secondary' | 'outline';
  };
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Boost',
    price: 99,
    period: 'weekly',
    badge: { text: 'Most Popular', variant: 'default' },
    features: [
      'Featured listing for 30 days',
      'Newsletter mention',
      'Social media promotion'
    ],
    buttonText: 'Get Started',
    buttonLink: 'https://example.com/basic-boost'
  },
  {
    name: 'Pro Boost',
    price: 199,
    period: 'monthly',
    badge: { text: 'Best Value', variant: 'secondary' },
    features: [
      'All Basic features',
      'Priority placement',
      'Detailed analytics',
      'Featured case study'
    ],
    highlighted: true,
    buttonText: 'Upgrade to Pro',
    buttonLink: 'https://example.com/pro-boost'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annually',
    badge: { text: 'Contact Us', variant: 'outline' },
    features: [
      'All Pro features',
      'Custom promotion plan',
      'Dedicated support'
    ],
    buttonText: 'Contact Sales',
    buttonLink: 'mailto:sales@example.com'
  }
];

function formatPrice(price: string | number, period: string): string {
  if (typeof price === 'string') return price;
  
  return `$${price}/${period === 'annually' ? 'yr' : period === 'monthly' ? 'mo' : 'wk'}`;
}

export function BoostPricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Boost Package</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`p-6 ${plan.highlighted ? 'border-primary scale-105 shadow-lg' : ''}`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold">
                  {formatPrice(plan.price, plan.period)}
                  {typeof plan.price === 'number' && (
                    <span className="text-lg text-muted-foreground">
                     
                    </span>
                  )}
                </p>
                {plan.badge && (
                  <Badge variant={plan.badge.variant as any} className="mt-2">
                    {plan.badge.text}
                  </Badge>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Rocket className="w-5 h-5 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={plan.highlighted ? 'default' : plan.name === 'Enterprise' ? 'outline' : 'default'}
                asChild
              >
                <a href={plan.buttonLink} target="_blank" rel="noopener noreferrer">
                  {plan.buttonText || 'Select Plan'}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card } from '@/components/ui/card';
import { Users, ChartNoAxesCombined, BadgeCheck, Mails  } from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: '1000s of active users',
    description: 'Reach a highly engaged audience of entrepreneurs and investors'
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Premium Exposure',
    description: 'Featured placement in Homepage and all startup details page '
  },
  {
    icon: BadgeCheck,
    title: 'Verified Status',
    description: 'Stand out with our verified startup badge'
  },
  {
    icon: Mails,
    title: 'Newsletter Mention',
    description: 'Get 2x mention in our newsletter which is read by 1000s of Indiehackers/founders'
  }
  
];

export function BoostBenefits() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="p-6 text-center hover:shadow-lg transition-shadow">
              <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
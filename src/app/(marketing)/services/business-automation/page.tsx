import { Metadata } from 'next';
import Link from 'next/link';
import { Network, Workflow, GitMerge, AlertCircle, BarChart, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { FAQSection } from '@/components/marketing/FAQSection';
import { CTASection } from '@/components/marketing/CTASection';
import { AnimatedSection, BusinessHeroVisual } from './client';

export const metadata: Metadata = {
  title: 'Business Workflow Automation | Nexus Automation',
  description: 'Connect your CRM, calendar, email, and team tools into one coordinated system that runs automatically.',
  openGraph: {
    title: 'Business Workflow Automation | Nexus Automation',
    description: 'Connect your CRM, calendar, email, and team tools into one coordinated system that runs automatically.',
  }
};

const faqs = [
  {
    question: "What tools can you integrate with?",
    answer: "We can connect almost any modern software that has an API. Common integrations include CRMs (HubSpot, GoHighLevel, Salesforce), Calendars, Slack/Teams, Email marketing tools, Stripe/QuickBooks, and custom internal databases."
  },
  {
    question: "Do you use Zapier or custom code?",
    answer: "We use a mix based on requirements. For straightforward connections, we use visual platforms like Make or Zapier. For complex data transformations or high-volume tasks, we write custom API middleware hosted on our servers."
  },
  {
    question: "What happens if a workflow breaks?",
    answer: "Our systems include robust error handling. If a step fails (e.g., an external API goes down), the workflow pauses, logs the error, and alerts your team via email or Slack. It can automatically retry once the issue is resolved."
  },
  {
    question: "How long does it take to build a custom workflow?",
    answer: "Simple automations (like Lead → CRM → Slack alert) take a few days. Complex, multi-step business processes can take 2-4 weeks to map out, build, test, and deploy."
  },
  {
    question: "Do I need to maintain this myself?",
    answer: "No. Our monthly automation packages include active monitoring, maintenance, and regular tweaks. If an API updates and breaks a connection, we fix it proactively."
  }
];

const workflows = [
  { title: "Lead Capture & Routing", desc: "Instantly capture leads from all sources, enrich data, and route to the right salesperson." },
  { title: "Onboarding Sequences", desc: "Automate contract signing, welcome emails, folder creation, and initial task generation." },
  { title: "Appointment Follow-ups", desc: "Send personalized post-meeting emails and update CRM pipeline stages automatically." },
  { title: "Invoice & Payment Sync", desc: "Generate invoices upon deal closure and sync data between Stripe and QuickBooks." },
  { title: "Support Ticket Routing", desc: "Categorize incoming support requests via AI and route to the appropriate department." },
  { title: "Automated Reporting", desc: "Compile data from multiple tools into weekly KPI reports sent directly to Slack." }
];

export default function BusinessAutomationPage() {
  return (
    <div className="page-container relative overflow-hidden bg-gray-50/50 dark:bg-black">
      
      {/* Hero Section */}
      <section className="section-py relative pt-32 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black/0 to-black/0 dark:from-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
                <Network className="w-4 h-4" />
                System Integration
              </div>
              <h1 className="heading-display mb-6">
                Connect every repetitive task into <br className="hidden lg:block"/>one <span className="text-gradient from-blue-500 to-indigo-600">intelligent workflow.</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Build intelligent workflows that connect your CRM, calendar, email, messaging, and team tools into one coordinated system that runs automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact" className="btn-primary-lg bg-blue-600 hover:bg-blue-700">
                  Map Your Process
                </Link>
                <Link href="#workflows" className="btn-secondary px-8 py-4 text-lg border-blue-500/20 hover:bg-blue-500/5">
                  View Examples
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={0.2} className="relative bg-white dark:bg-gray-900/40 rounded-3xl border border-gray-200 dark:border-white/10 p-4 lg:p-8 shadow-2xl">
            <BusinessHeroVisual />
          </AnimatedSection>
        </div>
      </section>

      {/* Manual vs Automated */}
      <section className="section-py bg-white dark:bg-gray-900/50 border-y border-gray-200 dark:border-white/5 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Stop doing computer work.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">See the difference when you automate a standard new client onboarding process.</p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Manual */}
            <AnimatedSection>
              <div className="card p-8 bg-red-50/50 dark:bg-red-950/10 border-red-100 dark:border-red-900/30">
                <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-6 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> The Manual Way (45 mins)
                </h3>
                <ul className="space-y-4 relative before:absolute before:inset-y-0 before:left-3.5 before:w-0.5 before:bg-red-200 dark:before:bg-red-900/50">
                  {['Check email for signed contract', 'Manually type data into CRM', 'Create Google Drive folder structure', 'Draft and send welcome email', 'Message team on Slack to start work'].map((step, i) => (
                    <li key={i} className="flex gap-4 relative z-10">
                      <div className="w-7 h-7 rounded-full bg-white dark:bg-gray-800 border-2 border-red-300 dark:border-red-800 flex items-center justify-center flex-shrink-0 text-xs font-bold text-gray-500">
                        {i + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Automated */}
            <AnimatedSection delay={0.2}>
              <div className="card p-8 bg-blue-50/50 dark:bg-blue-950/10 border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-6 flex items-center gap-2">
                  <Zap className="w-5 h-5" /> The Automated Way (Instantly)
                </h3>
                <div className="flex gap-4 mb-8">
                  <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold shadow-lg shadow-blue-500/20">
                    1
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 dark:text-white block mb-1">Contract Signed Trigger</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Everything else happens automatically in the background.</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 pl-11">
                  {['CRM Updated', 'Folders Created', 'Email Sent', 'Team Alerted'].map((step, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Common Workflows */}
      <section id="workflows" className="section-py relative">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-12">
            <h2 className="heading-lg mb-4">Automation for every department.</h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflows.map((workflow, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="card p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                  <Workflow className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="font-bold text-lg dark:text-white mb-2">{workflow.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{workflow.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard & Error Handling */}
      <section className="section-py bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="heading-lg mb-6">Built for reliability.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Automations are only good if you can trust them. Our systems include comprehensive error handling, logging, and human-in-the-loop approvals for sensitive actions.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                    <GitMerge className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Conditional Logic</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Routes data differently based on client type, deal size, or service requested.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-gray-700 dark:text-gray-300">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Failsafe Alerts</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">If an external API is down, the system pauses and alerts you instead of losing data.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-6 bg-white dark:bg-[#0A0A0A] border-gray-200 dark:border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 dark:border-white/10">
                  <h3 className="font-bold dark:text-white flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-blue-500" /> Automation Health
                  </h3>
                  <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-full font-medium">System Operational</span>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Lead Routing Flow", status: "Active", runs: "1,204", err: "0" },
                    { name: "Onboarding Sequence", status: "Active", runs: "45", err: "0" },
                    { name: "Invoice Sync", status: "Paused", runs: "312", err: "1" }
                  ].map((flow, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-lg border border-gray-100 dark:border-white/5">
                      <div>
                        <div className="font-medium text-sm text-gray-900 dark:text-white">{flow.name}</div>
                        <div className="text-xs text-gray-500 flex gap-3 mt-1">
                          <span>{flow.runs} runs</span>
                          <span className={flow.err === "0" ? "text-green-500" : "text-red-500"}>{flow.err} errors</span>
                        </div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${flow.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQSection />
      
      <CTASection />
    </div>
  );
}

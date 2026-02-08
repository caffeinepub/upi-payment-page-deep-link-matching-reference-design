import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';

const UPI_URI = 'upi://pay?pa=paytm.s1x87m2@pty&am=99&cu=INR&tn=Verified Merchant Account';

export default function PaymentPage() {
  const handlePayNow = () => {
    window.location.href = UPI_URI;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 overflow-hidden">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 text-white pb-6">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2.5">
                <Sparkles className="h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold">Premium Access</h1>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Limited Time Offer Badge */}
            <div className="flex justify-center">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-4 py-1.5 text-sm font-medium">
                Limited Time Offer
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                Monthly access in only ₹99/-
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Get unlimited access to all premium features
              </p>
            </div>

            <Separator className="my-6" />

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                What you'll get:
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Monthly access to all features</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">No recurring charges</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Instant activation</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-1">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <span className="text-slate-700 dark:text-slate-300">Priority support</span>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Action Button */}
            <div className="space-y-3">
              <Button 
                onClick={handlePayNow}
                className="w-full h-16 text-xl font-bold bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                GET PRIMIUM
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4">
              <p className="text-sm text-center text-slate-600 dark:text-slate-400">
                Click the button above to open your UPI app and complete the payment
              </p>
            </div>

            {/* Security Footer */}
            <div className="flex items-center justify-center gap-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Secure payment via UPI</span>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2026. Built with ❤️ using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

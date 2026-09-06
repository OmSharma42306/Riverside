import { Link } from 'react-router-dom';
import {
  Mic,
  Radio,
  ArrowRight,
  CheckCircle2,
  Sliders,
  CloudUpload,
  Cpu,
} from 'lucide-react';
import Header from '@repo/ui/Header';
import Footer from '@repo/ui/Footer';

const Landing: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('JWT');

  return (
    <div className="min-h-screen bg-[#07080b] text-slate-100 flex flex-col relative overflow-hidden font-sans">
      <Header />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-indigo-600/15 via-purple-600/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[800px] right-[-200px] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-28 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-medium text-indigo-300 shadow-inner backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Next-Gen Remote Production Engine</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Zero Internet Dropouts</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.08]">
            Cinema-Grade Recording. <br />
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Direct In Your Browser.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Record uncompressed separate-track 4K video and lossless studio audio locally on each participant’s device, with automated cloud chunk merging into master S3 tracks.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to={isLoggedIn ? '/dashboard' : '/signup'}
              className="w-full sm:w-auto btn-luxury btn-luxury-primary text-sm py-3 px-7 flex items-center justify-center gap-2 shadow-xl shadow-indigo-500/20"
            >
              <span>{isLoggedIn ? 'Go to Studio Dashboard' : 'Launch Studio Free'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/joinSession"
              className="w-full sm:w-auto btn-luxury btn-luxury-secondary text-sm py-3 px-6 flex items-center justify-center gap-2"
            >
              <Radio className="w-4 h-4 text-indigo-400" />
              <span>Join Studio With Code</span>
            </Link>
          </div>

          {/* Micro Trust Points */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> No software downloads
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Independent audio tracks
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> AWS S3 cloud archiving
            </span>
          </div>
        </div>

        {/* Studio Viewport Interactive Mockup */}
        <div className="mt-14 sm:mt-20 relative max-w-5xl mx-auto">
          {/* Glow Frame */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-indigo-500/20 via-purple-500/10 to-transparent blur-xl opacity-70" />

          <div className="relative rounded-2xl bg-[#0e121a] border border-white/[0.1] shadow-2xl overflow-hidden backdrop-blur-2xl">
            {/* Mockup Studio Top Bar */}
            <div className="h-12 bg-[#090c12] border-b border-white/[0.08] px-4 sm:px-6 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400/40" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 border border-yellow-400/40" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
                </div>
                <span className="text-zinc-600 text-xs font-mono ml-2">|</span>
                <span className="text-xs font-medium text-zinc-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  REC • 00:38:14
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-3">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  4K 60FPS • LOCAL ISOLATION
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  S3 CHUNK STREAM: 100%
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span>SESSION #8492</span>
              </div>
            </div>

            {/* Split Studio Video Grid */}
            <div className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#080b10]">
              {/* Host Tile */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/[0.08] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                  alt="Host Preview"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Host (Studio Lead)
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <Mic className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="w-1 h-3 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-2 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '75ms' }} />
                      <span className="w-1 h-4 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '200ms' }} />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    Track: host-master.webm
                  </span>
                </div>
              </div>

              {/* Guest Tile */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-white/[0.08] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Guest Preview"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> Remote Guest (London, UK)
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-white/10 backdrop-blur-md flex items-center justify-center">
                      <Mic className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div className="flex items-center gap-0.5">
                      <span className="w-1 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '100ms' }} />
                      <span className="w-1 h-4 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1 h-3 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '250ms' }} />
                      <span className="w-1 h-5 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                    Track: guest-isolated.webm
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Features Section */}
      <section id="features" className="py-24 border-t border-white/[0.06] bg-[#090b10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              The Architecture
            </h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Engineered for Zero Dropouts.
            </h3>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Standard video conference apps sacrifice recording quality when bandwidth fluctuates. RiverSide records high-bitrate media directly to hardware before cloud streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="obsidian-card p-8 obsidian-card-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Separate Audio & 4K Video</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Every participant’s microphone and webcam feed is recorded to an isolated, uncompressed local track for complete post-production control.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center text-xs font-semibold text-indigo-400 gap-1.5">
                <span>Multi-track isolation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="obsidian-card p-8 obsidian-card-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                  <CloudUpload className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Automated Cloud Merging</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Video chunks stream in real-time to a distributed BullMQ worker cluster that merges them seamlessly into persistent AWS S3 storage.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center text-xs font-semibold text-purple-400 gap-1.5">
                <span>BullMQ + AWS S3</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="obsidian-card p-8 obsidian-card-hover flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Real-Time WebRTC Feed</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Low-latency peer-to-peer communication gives you natural conversation without buffering delays, while high-def master tracks record in the background.
                </p>
              </div>
              <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center text-xs font-semibold text-emerald-400 gap-1.5">
                <span>Ultra low-latency</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works / 3 Steps */}
      <section id="how-it-works" className="py-24 border-t border-white/[0.06] bg-[#07080b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              The Workflow
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Three Steps to Studio Mastery
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono font-bold text-white text-sm">
                01
              </div>
              <h4 className="text-lg font-bold text-white">Create Studio Session</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Launch a session from your dashboard in one click. You receive a unique studio code to share with remote guests.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono font-bold text-white text-sm">
                02
              </div>
              <h4 className="text-lg font-bold text-white">Record with Separate Tracks</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Connect via WebRTC. RiverSide records uncompressed local streams straight from your camera and audio interfaces.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono font-bold text-white text-sm">
                03
              </div>
              <h4 className="text-lg font-bold text-white">Instant Download & Cloud Archive</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                When the session wraps, videos are merged and archived on AWS S3, ready for high-speed download or preview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Plan Table */}
      <section id="pricing" className="py-24 border-t border-white/[0.06] bg-[#090b10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase font-bold tracking-widest text-indigo-400">
              Pricing Plans
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Transparent, Studio-Grade Plans
            </h3>
            <p className="text-sm text-zinc-400">
              Get started with free studio access or unlock enterprise 4K bitrate streaming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="obsidian-card p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-1">Standard Studio</h4>
                <div className="text-3xl font-extrabold text-white my-4">$0 <span className="text-xs font-normal text-zinc-500">/ forever free</span></div>
                <p className="text-xs text-zinc-400 mb-6">Ideal for independent creators and podcast starters.</p>

                <ul className="space-y-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Unlimited local recording sessions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Separate audio and video tracks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Direct AWS S3 cloud archiving</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/signup"
                className="btn-luxury btn-luxury-secondary text-xs mt-8 w-full text-center justify-center"
              >
                Get Started Free
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="obsidian-card p-8 border-indigo-500/40 relative flex flex-col justify-between shadow-2xl shadow-indigo-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider shadow">
                Most Popular
              </div>

              <div>
                <h4 className="text-base font-bold text-white mb-1">Creator Pro</h4>
                <div className="text-3xl font-extrabold text-white my-4">$24 <span className="text-xs font-normal text-zinc-500">/ month</span></div>
                <p className="text-xs text-zinc-400 mb-6">For professional shows, studios, and production agencies.</p>

                <ul className="space-y-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Everything in Standard Studio</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>4K lossless video resolution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Priority BullMQ background worker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Producer control mode</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/signup"
                className="btn-luxury btn-luxury-primary text-xs mt-8 w-full text-center justify-center"
              >
                Upgrade to Pro
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="obsidian-card p-8 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-1">Broadcast Studio</h4>
                <div className="text-3xl font-extrabold text-white my-4">Custom</div>
                <p className="text-xs text-zinc-400 mb-6">Enterprise broadcasters with dedicated compliance.</p>

                <ul className="space-y-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Dedicated S3 bucket integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Custom domain & white-label guest room</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>99.99% uptime SLA guarantee</span>
                  </li>
                </ul>
              </div>

              <Link
                to="/signup"
                className="btn-luxury btn-luxury-secondary text-xs mt-8 w-full text-center justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#090b10] to-[#07080b]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Record Your Next Episode with Precision.
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            Experience the remote studio that never lets slow internet compromise your audio or video clarity.
          </p>
          <div className="pt-2">
            <Link
              to={isLoggedIn ? '/dashboard' : '/signup'}
              className="btn-luxury btn-luxury-primary text-sm py-3 px-8 shadow-xl shadow-indigo-600/30 inline-flex items-center gap-2"
            >
              <span>{isLoggedIn ? 'Open Your Studio Dashboard' : 'Create Free Account'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
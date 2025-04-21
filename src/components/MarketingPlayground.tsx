import React from "react";
import { Search, Users, Key } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ThreeDChart from "./ThreeDChart";

const MarketingPlayground = () => {
  // Data for the charts
  const searchAppearancesData = [
    {
      label: "Naukri Format",
      value: 3227,
      color: "#9b87f5",
      details:
        "Account A (Naukri Suggested Format): 🔼 3227 search appearances in 90 days & 🔼 74 recruiter actions. Top keywords: Digital Marketing (108), Sales (90), Business Development (81), Marketing (74), Lead Generation (63).",
    },
    {
      label: "My Format",
      value: 2954,
      color: "#33C3F0",
      details:
        "Account B (My Original Format): 🔽 2954 search appearances & 🔽 47 recruiter actions. Top keywords: Digital Marketing (130), Sales (89), Marketing (83), Business Development (82), Performance Marketing (65).",
    },
  ];

  const recruiterActionsData = [
    { label: "Naukri Format", value: 74, color: "#9b87f5" },
    { label: "My Format", value: 47, color: "#33C3F0" },
  ];

  // Calculate percentage differences
  const calculatePercentageDifference = (value1: number, value2: number) => {
    return Math.round(((value1 - value2) / value2) * 100);
  };

  const searchPercentageDiff = calculatePercentageDifference(
    searchAppearancesData[0].value,
    searchAppearancesData[1].value
  );
  const recruiterPercentageDiff = calculatePercentageDifference(
    recruiterActionsData[0].value,
    recruiterActionsData[1].value
  );

  return (
    <section id="marketing-playground" className="netflix-section">
      <div className="container mx-auto">
        <h2 className="section-heading">Marketing Playground</h2>

        <div className="mb-12 max-w-3xl mx-auto">
          <p className="section-subheading opacity-0 animate-fade-in">
            Welcome to my little corner of the web where we ditch the jargon and
            dive into the fun side of marketing!
          </p>

          <p className="mb-4 opacity-0 animate-fade-in">
            Think of this as a peek behind the curtain, where I share real-life
            marketing experiments, A/B tests with (sometimes unexpected!) results,
            and explorations into the fascinating world of consumer psychology.
            It's all about testing hypotheses, uncovering insights, and maybe even
            debunking a few myths along the way.
          </p>

          <p className="mb-4 opacity-0 animate-fade-in">
            Consider this your invitation to see marketing in action, raw and
            unfiltered. What you find here might just change how you think about
            engagement, conversions, and what truly makes people tick.
          </p>

          <p className="mb-6 opacity-0 animate-fade-in">
            This space is constantly evolving, with new experiments and findings
            being added over time. So, buckle up and get ready to have some fun
            with marketing!
          </p>

          <p className="text-netflix-red font-semibold mb-10 opacity-0 animate-fade-in">
            <strong>
              Intrigued? More experiments and insights are brewing... Stay tuned!
            </strong>
          </p>
        </div>

        {/* Naukri Experiment Card */}
        <Card className="netflix-card max-w-4xl mx-auto mb-12 opacity-0 animate-fade-in hover-scale">
          <CardHeader>
            <CardTitle className="text-2xl text-netflix-dark">
              Naukri Resume Format Experiment: Does it Really Matter?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Ever wondered if the format of your resume on job portals actually
              makes a difference? I did too! So, I ran a little experiment on
              Naukri, creating two identical profiles with the exact same text but
              using different resume formats:
            </p>

            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                <strong>Account A:</strong> Used Naukri's own suggested resume
                format.
              </li>
              <li className="mb-2">
                <strong>Account B:</strong> Used my original resume format.
              </li>
            </ul>

            <p className="mb-4">Here's what I found over 90 days:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ThreeDChart
                data={searchAppearancesData}
                title="Search Appearances Comparison"
                height={200}
                chartType="bar"
                tooltipText="Comparison of search appearances between the two resume formats"
                percentageDifference={searchPercentageDiff}
              />

              <ThreeDChart
                data={recruiterActionsData}
                title="Recruiter Actions Comparison"
                height={200}
                chartType="bar"
                tooltipText="Comparison of recruiter actions between the two resume formats"
                percentageDifference={recruiterPercentageDiff}
              />
            </div>

            <div className="bg-netflix-card p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex items-center mb-3">
                <Key className="w-6 h-6 text-netflix-red mr-2" />
                <h3 className="text-lg font-semibold">Top Keywords</h3>
              </div>
              <div className="text-sm">
                {searchAppearancesData.map((item, index) => (
                  <p key={index} className="mb-2">
                    {item.details}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-netflix-dark/5 p-4 rounded-md">
              <p className="mb-2">
                <strong>My Takeaway:</strong> It seems the resume format isn't
                just about aesthetics! The numbers suggest that Naukri's algorithm
                might indeed favor profiles using their own suggested format, even
                when the content is identical.
              </p>

              <p className="italic">
                What do you think? Have you experienced similar results on Naukri or
                other job portals?
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MarketingPlayground;

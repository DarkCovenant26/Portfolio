"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";

interface CVDownloaderProps {
  targetId: string;
  className?: string;
}

export function CVDownloader({ targetId, className }: CVDownloaderProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = () => {
    setIsGenerating(true);
    // html2canvas does not support modern CSS colors (oklch/lab) used by Tailwind v4.
    // Instead, we use the native browser print dialog, which produces perfect, 
    // text-selectable PDFs without rendering issues.
    setTimeout(() => {
      window.print();
      setIsGenerating(false);
    }, 500);
  };

  return (
    <Button
      onClick={generatePDF}
      disabled={isGenerating}
      className={className || "inline-flex items-center px-4 py-2 bg-slate-900 text-white rounded-md text-sm font-bold hover:bg-slate-800 transition-all shadow-sm"}
    >
      {isGenerating ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
      ) : (
        <Download className="w-4 h-4 mr-2" />
      )}
      Download PDF
    </Button>
  );
}

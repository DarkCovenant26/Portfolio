"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CVDownloaderProps {
  targetId: string;
  className?: string;
}

export function CVDownloader({ targetId, className }: CVDownloaderProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    try {
      setIsGenerating(true);

      const canvas = await html2canvas(targetElement, {
        scale: 2, 
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Zandro_Narvaza_CV.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      window.print();
    } finally {
      setIsGenerating(false);
    }
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

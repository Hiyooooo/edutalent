"use client";

import React, { useState } from "react";
import { CalendarCheck, Send, CheckCircle, AlertCircle, FileCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const LeaveDemo: React.FC = () => {
  const [leaveType, setLeaveType] = useState("Cuti Belajar (Persiapan Ujian)");
  const [startDate, setStartDate] = useState("2026-10-24");
  const [reason, setReason] = useState("Mengikuti ujian sertifikasi internal dan review modul keamanan data.");
  const [isPreviewed, setIsPreviewed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [announcement, setAnnouncement] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason.trim()) {
      setErrorMessage("Alasan pengajuan wajib diisi pada formulir simulasi.");
      setAnnouncement("Validasi gagal: Alasan pengajuan wajib diisi.");
      return;
    }
    setErrorMessage("");
    setIsPreviewed(true);
    setAnnouncement(
      `Pratinjau pengajuan ${leaveType} berhasil dibuat secara lokal dengan status Belum dikirim.`
    );
  };

  const handleReset = () => {
    setIsPreviewed(false);
    setErrorMessage("");
    setAnnouncement("Pratinjau pengajuan diatur ulang.");
  };

  return (
    <div className="rounded-card border border-border bg-surface p-5 md:p-6 shadow-sm space-y-5">
      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-control bg-surface-soft text-brand-dark">
            <CalendarCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-brand-dark">
                MODUL PERIZINAN
              </span>
              <Badge variant="cyan" size="sm">
                DATA SIMULASI
              </Badge>
            </div>
            <h4 className="font-display font-bold text-text text-base md:text-lg">
              Alur Cuti Belajar & Beasiswa Sertifikasi
            </h4>
          </div>
        </div>

        <div className="text-xs text-text-muted">
          Sisa Saldo Cuti Simulasi: <strong className="font-mono text-brand-dark">9 Hari</strong>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="md:col-span-7 space-y-4">
          <div>
            <label
              htmlFor="leave-type-select"
              className="block font-display text-xs font-bold text-text uppercase tracking-wider mb-1.5"
            >
              Jenis Permohonan Pengembangan
            </label>
            <select
              id="leave-type-select"
              value={leaveType}
              onChange={(e) => setLeaveType(e.target.value)}
              className="w-full rounded-control border border-border bg-bg px-3.5 py-2.5 text-sm text-text focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
            >
              <option value="Cuti Belajar (Persiapan Ujian)">
                Cuti Belajar (Persiapan Ujian / Workshop)
              </option>
              <option value="Beasiswa Dukungan Sertifikasi Profesi">
                Beasiswa Dukungan Sertifikasi Profesi
              </option>
              <option value="Izin Mengikuti Uji Kompetensi">
                Izin Mengikuti Uji Kompetensi
              </option>
              <option value="Cuti Tahunan Standar">
                Cuti Tahunan Standar
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="leave-date-input"
              className="block font-display text-xs font-bold text-text uppercase tracking-wider mb-1.5"
            >
              Rencana Tanggal Pelaksanaan
            </label>
            <input
              id="leave-date-input"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-control border border-border bg-bg px-3.5 py-2.5 text-sm font-mono text-text focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
            />
          </div>

          <div>
            <label
              htmlFor="leave-reason-input"
              className="block font-display text-xs font-bold text-text uppercase tracking-wider mb-1.5"
            >
              Uraian Kebutuhan Belajar / Alasan
            </label>
            <textarea
              id="leave-reason-input"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              aria-describedby={errorMessage ? "leave-error-desc" : undefined}
              className="w-full rounded-control border border-border bg-bg px-3.5 py-2.5 text-sm text-text focus:border-brand-dark focus:ring-1 focus:ring-brand-dark"
            />
            {errorMessage && (
              <p id="leave-error-desc" className="mt-1 text-xs text-danger font-medium">
                {errorMessage}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <Button type="submit" variant="primary" size="sm">
              Pratinjau Pengajuan
            </Button>
            {isPreviewed && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-text-muted hover:text-text px-3 py-2 rounded-control border border-border"
              >
                Reset
              </button>
            )}
          </div>
        </form>

        {/* Preview Panel */}
        <div className="md:col-span-5 rounded-card border border-border bg-surface-soft/60 p-4 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-border/60 pb-2 mb-3">
              <span className="font-display font-bold text-xs uppercase tracking-wider text-text-muted">
                Status Pratinjau Pengajuan
              </span>
              <Badge variant={isPreviewed ? "warning" : "neutral"} size="sm">
                {isPreviewed ? "Belum Dikirim" : "Menunggu Input"}
              </Badge>
            </div>

            {isPreviewed ? (
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="text-text-muted">Jenis:</span>
                  <p className="font-semibold text-text">{leaveType}</p>
                </div>
                <div>
                  <span className="text-text-muted">Tanggal:</span>
                  <p className="font-mono text-text">{startDate}</p>
                </div>
                <div>
                  <span className="text-text-muted">Alasan:</span>
                  <p className="text-text-muted italic bg-surface p-2 rounded-control border border-border/60">
                    &ldquo;{reason}&rdquo;
                  </p>
                </div>
                <div className="pt-2 text-brand-dark font-medium flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4" />
                  Alur approval siap ditinjau mentor / HR.
                </div>
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-text-muted space-y-2">
                <FileCheck className="h-8 w-8 text-brand-dark/40 mx-auto" />
                <p>Klik tombol &ldquo;Pratinjau Pengajuan&rdquo; untuk melihat simulasi ringkasan alur persetujuan.</p>
              </div>
            )}
          </div>

          <p className="text-[11px] text-text-muted pt-3 border-t border-border/40">
            Form ini hanya berjalan secara lokal di browser Anda. Tidak ada data pribadi atau request jaringan yang dikirimkan ke server.
          </p>
        </div>
      </div>
    </div>
  );
};

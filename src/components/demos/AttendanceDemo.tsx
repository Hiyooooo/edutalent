"use client";

import React, { useState } from "react";
import { Fingerprint, Clock, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface AttendanceRecord {
  id: number;
  date: string;
  type: "kerja" | "training";
  activity: string;
  hours: number;
  timeRange: string;
  status: string;
}

export const AttendanceDemo: React.FC = () => {
  const [filter, setFilter] = useState<"semua" | "kerja" | "training">("semua");
  const [announcement, setAnnouncement] = useState("");

  const records: AttendanceRecord[] = [
    {
      id: 1,
      date: "19 Okt 2026",
      type: "kerja",
      activity: "Operasional Kantor (Shift Pagi)",
      hours: 8.0,
      timeRange: "08:30 - 17:30 WIB",
      status: "Terekam (Simulasi)",
    },
    {
      id: 2,
      date: "19 Okt 2026",
      type: "training",
      activity: "Sesi Modul: Dasar Keamanan Data",
      hours: 1.5,
      timeRange: "13:30 - 15:00 WIB",
      status: "Training Mandiri",
    },
    {
      id: 3,
      date: "18 Okt 2026",
      type: "kerja",
      activity: "Operasional Kantor (Shift Pagi)",
      hours: 8.0,
      timeRange: "08:30 - 17:30 WIB",
      status: "Terekam (Simulasi)",
    },
    {
      id: 4,
      date: "18 Okt 2026",
      type: "training",
      activity: "Webinar SOP Tata Kelola Internal",
      hours: 2.0,
      timeRange: "10:00 - 12:00 WIB",
      status: "Training Selesai",
    },
  ];

  const filteredRecords = records.filter((r) => {
    if (filter === "semua") return true;
    return r.type === filter;
  });

  const handleFilterChange = (nextFilter: "semua" | "kerja" | "training") => {
    setFilter(nextFilter);
    const count = records.filter((r) => nextFilter === "semua" || r.type === nextFilter).length;
    setAnnouncement(`Menampilkan ${count} catatan kehadiran untuk filter ${nextFilter}.`);
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
            <Fingerprint className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-brand-dark">
                MODUL ABSENSI
              </span>
              <Badge variant="cyan" size="sm">
                DATA SIMULASI
              </Badge>
            </div>
            <h4 className="font-display font-bold text-text text-base md:text-lg">
              Rekap Waktu Kerja & Waktu Belajar
            </h4>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 rounded-control bg-bg p-1 border border-border">
          <button
            type="button"
            onClick={() => handleFilterChange("semua")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-control transition-colors ${
              filter === "semua"
                ? "bg-brand-dark text-white shadow-xs"
                : "text-text-muted hover:text-text"
            }`}
          >
            Semua
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("kerja")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-control transition-colors ${
              filter === "kerja"
                ? "bg-brand-dark text-white shadow-xs"
                : "text-text-muted hover:text-text"
            }`}
          >
            Kerja (8 Jam)
          </button>
          <button
            type="button"
            onClick={() => handleFilterChange("training")}
            className={`px-2.5 py-1 text-xs font-semibold rounded-control transition-colors ${
              filter === "training"
                ? "bg-brand-dark text-white shadow-xs"
                : "text-text-muted hover:text-text"
            }`}
          >
            Training (1.5 Jam)
          </button>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-card border border-border bg-surface-soft/60 p-4 flex items-center gap-3">
          <Clock className="h-6 w-6 text-brand-dark flex-shrink-0" />
          <div>
            <span className="text-xs text-text-muted">Total Jam Kerja Terjadwal</span>
            <p className="font-mono text-lg font-bold text-text">8,0 Jam / hari</p>
          </div>
        </div>
        <div className="rounded-card border border-cyan/30 bg-surface-cyan/50 p-4 flex items-center gap-3">
          <GraduationCap className="h-6 w-6 text-cyan-ink flex-shrink-0" />
          <div>
            <span className="text-xs text-text-muted">Alokasi Waktu Belajar (Training)</span>
            <p className="font-mono text-lg font-bold text-cyan-ink">1,5 Jam (Terpisah)</p>
          </div>
        </div>
      </div>

      {/* Records Table */}
      <div className="overflow-x-auto rounded-control border border-border">
        <table className="w-full text-left text-xs md:text-sm">
          <thead className="bg-bg text-text-muted font-mono uppercase text-xs border-b border-border">
            <tr>
              <th className="py-2.5 px-3">Tanggal</th>
              <th className="py-2.5 px-3">Aktivitas</th>
              <th className="py-2.5 px-3">Alokasi Waktu</th>
              <th className="py-2.5 px-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {filteredRecords.map((rec) => (
              <tr key={rec.id} className="hover:bg-bg/40">
                <td className="py-3 px-3 font-mono text-text-muted whitespace-nowrap">
                  {rec.date}
                </td>
                <td className="py-3 px-3">
                  <div className="font-semibold text-text">{rec.activity}</div>
                  <div className="text-xs text-text-muted">{rec.timeRange}</div>
                </td>
                <td className="py-3 px-3 font-mono">
                  {rec.type === "training" ? (
                    <span className="text-cyan-ink font-bold">{rec.hours} Jam (Training)</span>
                  ) : (
                    <span className="text-text font-bold">{rec.hours} Jam (Kerja)</span>
                  )}
                </td>
                <td className="py-3 px-3">
                  <Badge variant={rec.type === "training" ? "cyan" : "brand"} size="sm">
                    {rec.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center gap-2 text-xs text-text-muted">
        <MapPin className="h-4 w-4 text-brand-dark flex-shrink-0" />
        <span>
          Fitur Geofencing GPS dijelaskan sebagai kemampuan potensial; demo ini tidak meminta izin lokasi riil perangkat Anda.
        </span>
      </div>
    </div>
  );
};

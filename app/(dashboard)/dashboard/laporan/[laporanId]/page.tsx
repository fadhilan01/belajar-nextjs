export default async function LaporanDetails({
    params,
}: {
    params: Promise<{ laporanId: string }>;
}) {
    const laporanId = (await params).laporanId;
    return <h1>Details about laporan {laporanId}</h1>;
}

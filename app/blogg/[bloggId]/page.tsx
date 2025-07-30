export default async function BloggDetails({
    params,
}: {
    params: Promise<{ bloggId: string }>;
}) {
    const bloggId = (await params).bloggId;
    return <h1>Details about blogg {bloggId}</h1>;
}

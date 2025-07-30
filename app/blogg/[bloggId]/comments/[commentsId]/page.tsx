export default async function BloggComments({
    params,
}: {
    params: Promise<{ bloggId: string, commentsId: string }>
}) {
    const {bloggId, commentsId} = await params
    return (
        <h1>comments {commentsId} for blogg {bloggId}</h1>
    )
}

export default async function ProductReview({
    params,
}: {
    params: Promise<{ productsId: string, reviewId: string }>
}) {
    const {productsId, reviewId} = await params
    return (
        <h1>Review {reviewId} for Product {productsId}</h1>
    )
}

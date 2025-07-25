export default async function ProductDetails({
    params,
}: {
    params: Promise<{ productsId: string }>;
}) {
    const productsId = (await params).productsId;
    return <h1>Details about product {productsId}</h1>;
}

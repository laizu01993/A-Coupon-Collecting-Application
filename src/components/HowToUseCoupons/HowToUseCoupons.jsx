
const HowToUseCoupons = () => {
    return (
        <section className="bg-gray-100 py-10">
            <h2 className="text-3xl font-bold text-center text-purple-600 mb-8">How to Use Coupons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                <div className="text-center">
                    <div className="text-4xl mb-2">🔍</div>
                    <h3 className="text-xl font-semibold">1. Browse Brands</h3>
                    <p className="text-gray-600">Explore top brands and their active coupons.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-2">🏷️</div>
                    <h3 className="text-xl font-semibold">2. Get Coupon Code</h3>
                    <p className="text-gray-600">Click to view and copy a coupon code.</p>
                </div>
                <div className="text-center">
                    <div className="text-4xl mb-2">🛒</div>
                    <h3 className="text-xl font-semibold">3. Apply at Checkout</h3>
                    <p className="text-gray-600">Use the code while placing an order on the brand's site.</p>
                </div>
            </div>
        </section>
    );
};
export default HowToUseCoupons;

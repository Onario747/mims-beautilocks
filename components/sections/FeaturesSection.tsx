export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Features
          </h2>
          <p className="text-lg text-gray-600">
            Experience the best hair care services tailored just for you
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards will go here */}
        </div>
      </div>
    </section>
  );
};

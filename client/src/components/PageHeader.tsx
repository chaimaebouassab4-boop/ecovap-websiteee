interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-[#082025] text-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
    </div>
  );
}

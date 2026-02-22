interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 sm:px-8">
      <div>
        <div className="text-xs text-gray-500 py-2 flex items-center gap-1 flex-wrap">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-1">
              {item.href ? (
                <a
                  href={item.href}
                  className="underline cursor-pointer"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}

              {index < items.length - 1 && <span>&gt;</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

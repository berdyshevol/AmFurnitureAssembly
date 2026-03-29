import Link from 'next/link'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  href?: string
}

function CardContent({ icon, title, description }: Omit<ServiceCardProps, 'href'>) {
  return (
    <>
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-2xl text-white">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-secondary leading-relaxed">{description}</p>
    </>
  )
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const cardClasses =
    'block rounded-[var(--radius-card)] bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'

  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        <CardContent icon={icon} title={title} description={description} />
      </Link>
    )
  }

  return (
    <div className={cardClasses}>
      <CardContent icon={icon} title={title} description={description} />
    </div>
  )
}

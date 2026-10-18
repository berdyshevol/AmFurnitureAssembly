import JsonLd from '@/components/JsonLd'
import { localBusinessSchema } from '@/lib/structured-data'

export default function StructuredData() {
  return <JsonLd data={localBusinessSchema()} />
}

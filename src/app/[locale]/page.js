import PageLayout from '@/components/PageLayout'
import { useTranslations } from 'next-intl'

export default function Home ({ params: { locale } }) {
  const t = useTranslations('Index')

  return (
    <PageLayout title={t('title')}>
      <main className="flex flex-col items-center justify-between p-24">
        <h1 className="text-xl font-bold"> This is a deplyment TEST!</h1>
      </main>
    </PageLayout>
  )
}

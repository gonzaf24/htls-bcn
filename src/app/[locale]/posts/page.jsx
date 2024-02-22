import PageLayout from '@/components/PageLayout'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

export default function PostsPage ({ params: { locale } }) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('PostsPage')

  return (
    <PageLayout title={t('title')}>
      <div className="max-w-[490px]">
        {t('description')}
      </div>
    </PageLayout>
  )
}

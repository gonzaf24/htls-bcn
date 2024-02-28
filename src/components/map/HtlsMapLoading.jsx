import styles from './HtlsMap.module.css'

export const HtlsMapLoading = () => {
  return (
      <div className='h-[80%] w-full flex flex-col gap-y-10 justify-items-center items-center justify-center'>
      <div className={styles.loader}/>
      <div className={styles.loaderBar}/>
    </div>
  )
}

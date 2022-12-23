import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { startNavigationProgress, completeNavigationProgress, NavigationProgress } from '@mantine/nprogress';
import { useMantineTheme } from '@mantine/core';

export function RouterTransition() {
  const router = useRouter();
  const theme = useMantineTheme();

  useEffect(() => {
    const handleStart = (url: string) => url !== router.asPath && startNavigationProgress();
    const handleComplete = () => completeNavigationProgress();

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router.asPath]);

  return (
    <NavigationProgress
      progressLabel="Ładowanie strony"
      color={theme.colors.brand[6]}
      autoReset={true}
    />
  );
}

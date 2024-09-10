import SeccionCard from '@/components/Cards/SeccionCard';
import PageLayout from '@/components/layout';
import { NextPage } from 'next';
import React from 'react';

const RootIndex: NextPage = () => {

  return (
    <PageLayout>
      <SeccionCard />
    </PageLayout>
  );
};

export default RootIndex;

import React from 'react';
import {PageLayout} from "./components/PageLayout";
import {Home} from "./components/Home";

export default function App() {


    return (
        <div>
            <PageLayout>
                <Home />
            </PageLayout>
        </div>
    );
  }



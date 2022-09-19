import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';
import { OnlyHeaderFooter } from '~/components/Layouts';
import Posts from './pages/Posts';
function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}
        <Routes>
          {/* {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout === 'OnlyHeaderFooter') {
                Layout = OnlyHeaderFooter;
              } else if (route.layout === 'Null') {
                Layout = Fragment;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })} */}
          <Route key="" path="/posts" element={<Posts />} />
        </Routes>
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;

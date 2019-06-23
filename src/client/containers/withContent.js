import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as contentActions from 'client/redux/reducers/contentActions';
import Head from 'client/Head';

export default WrappedComponent => {
  function ContentWrapper(props) {
    useEffect(() => {
      checkFetch();
    }, []);

    const checkFetch = () => {
      const { content, addContent, location } = props;
      let isFetching;
      if (isFetching) {
        return <div>Loading</div>;
      }

      if ((!content || !content.size) && typeof window === 'undefined') {
        const url = `${window.location.origin}/fetch${location.pathname}`;

        const headers = new Headers({
          'Content-Type': 'application/json',
        });
        isFetching = true;
        fetch(url, { headers })
          .then(response => {
            isFetching = false;
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          })
          .then(({ result }) => {
            addContent(result);
          })
          .catch(e => {
            console.log(e);
          });
      }
    };

    const renderHelmet = () => {
      const { location, content } = props;
      const seo = content.get('seo');
      const helmetProps = {
        url: `https://we-are.cc${location.pathname}`,
        headerImage: seo.getIn(['image', 'fields', 'file', 'url']),
        description: seo.get('description'),
        title: seo.get('title'),
      };
      return <Head key="head" {...helmetProps} />;
    };

    if (!props.content) {
      return <div>Loading</div>;
    }

    return (
      <>
        {renderHelmet()}
        <WrappedComponent {...props} />
      </>
    );
  }

  const mapStateToProps = (state, props) => {
    return {
      content: state.getIn(['content', props.location.pathname]),
      navBar: state.getIn(['navBar', 'fields', 'navigation']),
    };
  };

  return withRouter(
    connect(
      mapStateToProps,
      {
        addContent: contentActions.add,
      }
    )(ContentWrapper)
  );
};

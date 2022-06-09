import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import axios from 'axios'
import { Formik } from 'formik'
import { withRouter } from 'react-router'
import { useDispatch } from 'react-redux'

import TwoPoints from 'components/Icons/TwoPoints'
import SearchIcon from 'components/Icons/SearchIcon'
import FaceCryIcon from 'components/Icons/FaceCryIcon'
import FaceHappyIcon from 'components/Icons/FaceHappyIcon'
import { setSearchDomainName, setSelectedDomain } from 'app/slices/domainSlice'

import '../../api/subDomainRegistrar'

function Search({ history, className, style, searchingDomainName }) {
  const [showPopup, setShowPopup] = useState(false)
  const [result, setResult] = useState(null)
  const dispatch = useDispatch()

  const gotoDetailPage = () => {
    if (result.Owner) {
      // history.push(`/address/${result.Owner}`)
      dispatch(setSelectedDomain({ ...result, expires_at: '2023.3.6' }))
      history.push(`/profile`)
    } else {
      history.push(`/name/${result.name}.bnb/register`)
    }
  }

  useEffect(() => {
    if (searchingDomainName) {
      dispatch(setSearchDomainName(''))
      const params = {
        ChainID: 97,
        name: searchingDomainName
      }
      axios
        .post(`https://space-id-348516.uw.r.appspot.com/nameof`, {
          ...params
        })
        .then(res => {
          setResult(res.data)
          setShowPopup(true)
        })
    }
  }, [searchingDomainName])

  return (
    <div className={cn('relative', className)}>
      <Formik
        initialValues={{ searchKey: searchingDomainName ?? '' }}
        validate={values => {
          const errors = {}
          if (values.searchKey.length < 3) {
            errors.searchKey = 'Name length must be at least 3 characters'
          } else if (
            !new RegExp(/^[a-z0-9\p{Emoji}]*$/u).test(values.searchKey)
          ) {
            errors.searchKey =
              'Name can only contain lowercase letters, numbers and emojis'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          const params = {
            ChainID: 97,
            name: values.searchKey
          }
          axios
            .post(`https://space-id-348516.uw.r.appspot.com/nameof`, {
              ...params
            })
            .then(res => {
              setResult(res.data)
              setShowPopup(true)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <form
            className={cn(`relative`)}
            style={style}
            onSubmit={handleSubmit}
          >
            <TwoPoints className="absolute text-[#1EEFA4] left-4 top-[11px]" />
            <div>
              <input
                className="w-full bg-[#104151]/[0.25] py-[10px] px-[36px] text-[#BDCED1] text-[16px] border border-[#1EEFA4] rounded-[18px] focus:bg-transparent active:bg-transparent"
                placeholder="Explore the space"
                onChange={e => {
                  setShowPopup(false)
                  handleChange(e)
                }}
                type="text"
                name="searchKey"
                onBlur={handleBlur}
                value={values.searchKey}
              />
            </div>
            {errors.searchKey && touched.searchKey && (
              <div className="text-[#ED7E17] text-[16px] font-semibold mt-1 ml-3">
                {errors.searchKey}
              </div>
            )}
            <button
              className="absolute right-4 top-[14px]"
              type="submit"
              data-testid={'home-search-button'}
            >
              <SearchIcon className="text-[#1EEFA4]" />
            </button>
            <div className="text-[#1EEFA4] font-urbanist font-semibold text-[16px] absolute right-[44px] top-[10px]">
              .bnb
            </div>
          </form>
        )}
      </Formik>
      {showPopup && (
        <div className="absolute top-[55px] shadow-popup flex w-full bg-[#205561] px-3 py-3 rounded-[12px] backdrop-blur-[5px] justify-between">
          <div className="flex items-center">
            {result.Owner ? (
              <FaceCryIcon className="text-[#ED7E17]" />
            ) : (
              <FaceHappyIcon className="text-[#30DB9E]" />
            )}

            <span
              className={cn(
                'ml-2 text-[16px] font-semibold',
                result.Owner ? 'text-[#ED7E17]' : 'text-[#30DB9E]'
              )}
            >
              {result.name}.bnb
            </span>
          </div>
          <div className="flex items-center">
            <div
              className={cn(
                'text-[12px]',
                result.Owner ? 'text-[#ED7E17]' : 'text-[#30DB9E]'
              )}
            >
              {result.Owner ? 'Unavailable' : 'Available'}
            </div>
            <div
              onClick={gotoDetailPage}
              className={cn(
                'cursor-pointer w-[100px] justify-center flex items-center h-[28px] text-white text-center rounded-[8px] font-urbanist font-semibold ml-3',
                result.Owner ? 'bg-[#ED7E17]' : 'bg-[#30DB9E]'
              )}
            >
              {result.Owner ? <span>View</span> : <span>Register</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const SearchWithRouter = withRouter(Search)

const SearchContainer = ({
  searchDomain,
  className,
  style,
  searchingDomainName
}) => {
  return (
    <SearchWithRouter
      searchDomain={searchDomain}
      className={className}
      style={style}
      searchingDomainName={searchingDomainName}
    />
  )
}

export { SearchWithRouter as Search }

export default SearchContainer

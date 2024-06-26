import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDomainList } from 'api/index'
const initialState = {
  selectedDomain: null,
  searchingDomainName: '',
  domains: [],
  primaryDomain: undefined,
}

export const getDomainList = createAsyncThunk(
  'domain/getDomainList',
  async ({ account, networkId }) => {
    return fetchDomainList(account, networkId)
  }
)

export const domainSlice = createSlice({
  name: 'domainDetail',
  initialState,
  reducers: {
    setSelectedDomain: (state, { payload }) => {
      state.selectedDomain = payload
    },
    setSearchDomainName: (state, { payload }) => {
      state.searchingDomainName = payload
    },
    setAllDomains: (state, { payload }) => {
      state.domains = payload
    },
    setPrimaryDomain: (state, { payload }) => {
      state.primaryDomain = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDomainList.fulfilled, (state, action) => {
      const data = action.payload ?? []
      if (state.selectedDomain) {
        const name = state.selectedDomain.name
        const temp = data.find((v) => v.name === name)
        if (temp) {
          Object.keys(temp).forEach((k) => {
            state.selectedDomain[k] = temp[k]
          })
        }
      } else {
        state.selectedDomain = data[0]
      }
      state.domains = data
    })
  },
})

// Action creators are generated for each case reducer function
export const {
  setSelectedDomain,
  setSearchDomainName,
  setAllDomains,
  setPrimaryDomain,
} = domainSlice.actions

export default domainSlice.reducer

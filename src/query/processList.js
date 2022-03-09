import {gql} from '@apollo/client';

export const GET_PROCESS_LIST = gql`
    query processList {
    processList {
      id
      name
      numberOfExecutions
      averageLeadTime
      averageActiveTime
      employeesInvolvedProcess
      numberOfScenarios
      start
      end
      loading
    }
  }
`
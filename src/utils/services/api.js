import request from '../utils';

// 유저관련
export async function queryAddress(param) {
  if (!param) {
    return request(`/address/?state=all`, {
      method: 'GET',
    });
  } else {
    return request(`/address/?state=${param}`, {
      method: 'GET',
    });
  }
}
export async function query20sLawmaker(district, name=null) {
  if (name && district) {
    return request(`/lawmakers/20?district=${encodeURI(district)}&name=${encodeURI(name)}`, {
      method: 'GET',
    });
  } else if (district) {
    return request(`/lawmakers/20?district=${encodeURI(district)}`, {
      method: 'GET',
    });
  }
}

export async function querySummaryLawmaker(param) {
  if (param) {
    return request(`/lawmakers/summaries?district=${encodeURI(param)}`, {
      method: 'GET',
    });
  }
}

export async function query21Candidate(district, name=null) {
  if (district) {
    return request(`/lawmakers/21/candidate?district=${encodeURI(district)}&name=${encodeURI(name)}`, {
      method: 'GET',
    });
  }
}



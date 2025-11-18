// auth.api.ts

import type { LoginRequest, LoginResponse } from "@/types/auth.type";
import { publicApi } from "../common/axiosInstance";
import type { ApiResponse } from "@/types/common/ApiResponse";
import { AUTH_PATH } from "./auth.path";

export const authApi = {
  login: async (req: LoginRequest): Promise<LoginResponse> => {
    // axios.메서드<메서드반환타입>();
    const res = await publicApi.post<ApiResponse<LoginResponse>>(
      AUTH_PATH.LOGIN,
      req
    );
    return res.data.data;
  },
};

// 로그인 요청
// export async function login(req: LoginRequest): Promise<LoginResponse> {
//   const res = await publicApi.post<ApiResponse<LoginResponse>>(
//     API_ROUTES.AUTH.LOGIN,
//     req
//   );
//   return res.data.data;
// }
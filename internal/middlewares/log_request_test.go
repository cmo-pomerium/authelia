// SPDX-FileCopyrightText: 2019 Authelia
//
// SPDX-License-Identifier: Apache-2.0

package middlewares

import (
	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/valyala/fasthttp"
)

func TestShouldCallNextFunction(t *testing.T) {
	var val = false

	f := func(ctx *fasthttp.RequestCtx) { val = true }

	context := &fasthttp.RequestCtx{}
	LogRequest(f)(context)

	assert.Equal(t, true, val)
}

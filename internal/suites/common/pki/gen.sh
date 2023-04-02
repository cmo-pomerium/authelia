#!/bin/bash

# SPDX-FileCopyrightText: 2019 Authelia
#
# SPDX-License-Identifier: Apache-2.0

# go run ./cmd/authelia crypto certificate rsa generate  --directory ./internal/suites/common/pki/ca -n 'Authelia Development Standalone Root CA' --not-before 'Jan 1 00:00:00 2000' --not-after 'Jan 1 00:00:00 2100' -o 'Authelia' --organizational-unit 'Development' --ca
# cp ./internal/suites/common/pki/ca/ca.public.crt ./internal/suites/common/pki/ca.public.crt
go run ./cmd/authelia crypto certificate rsa generate --directory ./internal/suites/common/pki --path.ca ./internal/suites/common/pki/ca --bundles 'chain,priv-chain' -n '*.example.com' --sans '*.example.com,example.com,*.example1.com,example1.com,*.example2.com,example2.com,*.example3.com,example3.com' --not-before 'Jan 1 00:00:00 2000' --not-after 'Jan 1 00:00:00 2100' -o 'Authelia' --organizational-unit 'Development'
go run ./cmd/authelia crypto certificate rsa generate --directory ./internal/suites/common/pki --path.ca ./internal/suites/common/pki/ca --bundles 'chain,priv-chain' --file.certificate public.backend.crt --file.private-key private.backend.pem --file.bundle.chain public.backend.chain.pem --file.bundle.priv-chain private.backend.chain.pem -n 'login.example.com' --sans 'login.example.com,authelia' --not-before 'Jan 1 00:00:00 2000' --not-after 'Jan 1 00:00:00 2100' -o 'Authelia' --organizational-unit 'Development'
go run ./cmd/authelia crypto certificate rsa generate --directory ./internal/suites/common/pki --path.ca ./internal/suites/common/pki/ca --bundles 'chain,priv-chain' --file.certificate public.oidc.crt --file.private-key private.oidc.pem --file.bundle.chain public.oidc.chain.pem --file.bundle.priv-chain private.oidc.chain.pem -n 'login.example.com' --sans 'login.example.com,login.example1.com,login.example2.com,login.example3,com' --not-before 'Jan 1 00:00:00 2000' --not-after 'Jan 1 00:00:00 2100' -o 'Authelia' --organizational-unit 'Development'

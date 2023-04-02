// SPDX-FileCopyrightText: 2019 Authelia
//
// SPDX-License-Identifier: Apache-2.0

package cmd

import (
	log "github.com/sirupsen/logrus"
)

var logLevel string

func levelStringToLevel(level string) log.Level {
	if level == "debug" {
		return log.DebugLevel
	} else if level == "warning" {
		return log.WarnLevel
	}

	return log.InfoLevel
}
